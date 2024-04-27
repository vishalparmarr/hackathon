import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
// internal
import { HeartTwo, CartTwo } from "@svg/index";
import { SocialShare } from "@components/social";
import ProductDetailsPrice from "./product-details-price";
import ProductQuantity from "./product-quantity";
import ProductDetailsCategories from "./product-details-categories";
import ProductDetailsTags from "./product-details-tags";
import { add_cart_product } from "src/redux/features/cartSlice";
import { add_to_wishlist } from "src/redux/features/wishlist-slice";

const ProductDetailsArea = ({ product }) => {
  const [customUpload, setCustomUpload] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const maxFileSize = 20 * 1024 * 1024; // 20MB
    const maxFileCount = 10;

    // Filter out non-image files
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    // Check for file count limit
    if (imageFiles.length > maxFileCount) {
      alert(`You can only upload up to ${maxFileCount} images at a time.`);
      return;
    }

    // Check for total file size limit
    const totalSize = imageFiles.reduce((total, file) => total + file.size, 0);
    if (totalSize > maxFileSize) {
      alert(`The total file size cannot exceed 20MB.`);
      return;
    }

    // Update state with the selected files if all checks pass
    setSelectedFiles(imageFiles);
    const newPreviewUrls = imageFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls(newPreviewUrls);
  };

  const uploadFiles = async (files) => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    setIsUploading(true);
    try {
      const response = await fetch('YOUR_BACKEND_ENDPOINT', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        // Handle successful upload here, e.g., redirecting to checkout
        router.push('/checkout');
      } else {
        alert('Upload failed. Please try again.');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFiles.length > 0) {
      uploadFiles(selectedFiles);
    }
  };

  const handleCustomUpload = () => {
    console.log("custom upload");
    if (product?.category?.name != "CHITRAKAARI") return;
    setCustomUpload(true);
  };
  useEffect(() => {
    handleCustomUpload();
  }, []);
  const {
    _id,
    image,
    relatedImages,
    title,
    quantity,
    originalPrice,
    discount,
    tags,
    sku,
  } = product || {};
  const [activeImg, setActiveImg] = useState(image);
  useEffect(() => {
    setActiveImg(image);
  }, [image]);

  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);
  const isWishlistAdded = wishlist.some((item) => item._id === _id);

  // handle add product
  const handleAddProduct = (prd) => {
    dispatch(add_cart_product(prd));
  };

  // handle add wishlist
  const handleAddWishlist = (prd) => {
    dispatch(add_to_wishlist(prd));
  };


  return (
    <section className="product__details-area pb-115">
      <div className="container">
        {/* Other product details layout */}
          {!customUpload ? (
            <button
              onClick={() => handleAddProduct(product)}
              type="button"
              className="product-add-cart-btn product-add-cart-btn-3"
            >
              <CartTwo />
              Add to Cart
            </button>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                onChange={handleFileChange}
                multiple
                accept="image/*"
              />
              <div className="previews">
                {previewUrls.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Preview ${index + 1}`}
                    style={{
                      width: 100,
                      height: 100,
                      objectFit: "cover",
                    }}
                  />
                ))}
              </div>
              {selectedFiles.length > 0 && (
                <button
                  type="submit"
                  disabled={isUploading}
                  className="product-add-cart-btn"
                >
                  {isUploading ? 'Uploading...' : 'Add to Cart & Upload'}
                </button>
              )}
            </form>
          )}
        {/* Rest of the component */}
      </div>
    </section>
  );
};

export default ProductDetailsArea;
