"use client";
import Backbutton from "@/components/ui/back";
import React from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { pdfjs, Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfPage() {
  return (
    <div>
      <Backbutton />
      <div className="grid place-items-center overflow-auto max-h-screen w-full">
        <Document file="/pdfs/Myres.pdf" onLoadError={console.error}>
          <Page pageIndex={0} scale={2} />
        </Document>
      </div>
    </div>
  );
}
