import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { set } from "react-hook-form";
import { CiMicrophoneOn } from "react-icons/ci";
import { object } from "yup";

const SpeechTranslate = () => {
  const router = useRouter();
  const processvoice = async (transcript) => {
    if (window.location.href.includes("/checkout")) {
      // Select all input elements within the checkbox-form class

      let response = await fetch("http://server.udayps.com:8090/api/vertex", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: transcript, type: "checkout" }),
      });
      response = await response.json();
      let processedOutput = response;

      document
        .querySelector(
          "#__next > section.checkout-area.pb-85 > div > form > div > div:nth-child(2) > div:nth-child(1) > div.your-order-table.table-responsive > table > tfoot > tr:nth-child(2) > td > ul > li:nth-child(2) > label"
        )
        .click();

      await Object.keys(processedOutput).forEach((key) => {
        try {
          console.log(key, processedOutput[key]);
          document.querySelector(key).value = processedOutput[key];
        } catch (error) {}
      });
        document
          .querySelector(
            "#__next > section.checkout-area.pb-85 > div > form > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > button"
          )
          .click();

      try {
        console.log(key, processedOutput[key]);
        document.querySelector(key).value = processedOutput[key];
      } catch (error) {}

     
      console.log("returning");
      console.log("x", response);
      return null;
    }
    if (transcript.trim() == "") return {};
    console.log("->", transcript);
    let response = await fetch("http://server.udayps.com:8090/api/vertex", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: transcript }),
    });
    response = await response.json();
    console.log(response);

    if (response.type == "function" && response.functionName == "search") {
      console.log("searching");
      return router.push(`/search?query=${response.inputs}`, null, {
        scroll: false,
      });
    }
    if (response.type == "function" && response.functionName == "open") {
      console.log("opening");
      return router.push(`/product-details/${response.inputs}`, null, {
        scroll: false,
      });
    }
    if (response.type == "function" && response.functionName == "add2cart") {
      console.log("adding to cart");
      if (document.location.href.includes("/product-details/")) {
        document
          .querySelector("button.product-add-cart-btn.product-add-cart-btn-3")
          .click();
        return router.push(`/checkout`, null, { scroll: false });
      }
    }

    return response;
  };

  const [transcript, setTranscript] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [processedText, setProcessedText] = useState("");

  const [isListening, setIsListening] = useState(false);

  const processAndTranslateText = async (text) => {
    const processedText = await processvoice(text);
    //setTranslatedText(processedText.content);
  };

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = SpeechRecognition ? new SpeechRecognition() : null;

    if (!recognition) {
      console.error("Speech Recognition not supported in this browser.");
      return;
    }

    recognition.onresult = (event) => {
      const transcriptResult = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      setTranscript(transcriptResult);
      console.log("Listened: ", transcriptResult);
      processAndTranslateText(transcriptResult);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    const startListening = () => {
      recognition.start();
      setIsListening(true);
      setTranscript("");
      setTranslatedText("");
    };

    window.startListening = startListening;
  }, []);

  return (
    <div>
      <button
        onClick={() => window.startListening()}
        disabled={isListening}
        className={isListening ? "voice listening" : "voice"}
      >
        <CiMicrophoneOn />
      </button>
      <div></div>
    </div>
  );
};

export default SpeechTranslate;
