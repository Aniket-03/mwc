"use client";
import { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Drawer,
  IconButton,
  List,
  ListItem,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const Footer = () => {
 

  return (
  
    <section>
    <footer className="py-10 px-6 md:px-10 lg:px-16 border-t bg-gray-800 border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-3">
            <div className="flex items-center">
              <Link href="/">
                <div className="flex items-center cursor-pointer">
                  <h1 className="text-white text-xl font-bold">
                    <span className="text-[#ff4d00]">M</span>
                    <span className="text-white">W</span>
                    <span className="text-white mr-2">C</span>
                    <span className="text-[#ff4d00]">C</span>
                    <span className="text-white">O</span>
                    <span className="text-white">N</span>
                    <span className="text-white">N</span>
                    <span className="text-white">E</span>
                    <span className="text-white">C</span>
                    <span className="text-white">T</span>
                  </h1>
                </div>
              </Link>
            </div>
            </div>
            <p className="text-gray-200 text-sm mb-6">
              Best Real State Company in jaipur.
            </p>
            <p className="text-gray-300 text-xs">
              © 2021 Real State Company  
            </p>
          </div>

          {/* Product column */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-100 mb-4">PRODUCT</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-200 hover:text-gray-800">Apartment</a></li>
              <li><a href="#" className="text-gray-200 hover:text-gray-800">Flat</a></li>
              <li><a href="#" className="text-gray-200 hover:text-gray-800">House</a></li>
              <li><a href="#" className="text-gray-200 hover:text-gray-800">Plot</a></li>
            </ul>
          </div>

          {/* Company column */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-100 mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-200 hover:text-gray-800">About</a></li>
              <li><a href="#" className="text-gray-200 hover:text-gray-800">Contact</a></li>
              <li><a href="#" className="text-gray-200 hover:text-gray-800">Blog</a></li>
            </ul>
          </div>

          {/* Social column */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-100 mb-4">SOCIAL</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-200 hover:text-blue-400 flex items-center">
                  <span className="text-blue-400 mr-2">
                    <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                    </svg>
                  </span>
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-blue-600 flex items-center">
                  <span className="text-blue-600 mr-2">
                    <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                    </svg>
                  </span>
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-pink-600 flex items-center">
                  <span className="text-pink-600 mr-2">
                    <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z"></path>
                    </svg>
                  </span>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </section>
  );
};


export default Footer;