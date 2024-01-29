import { Footer as FlowbiteFooter } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

export default function Footer() {
  return (
    <FlowbiteFooter container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-col-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Norman's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FlowbiteFooter.Title title="About" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 JS Projects
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About Norman
                </FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="Follow Us" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.Title title="Legal" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms &amp; Conditions
                </FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
          </div>
        </div>
        <FlowbiteFooter.Divider />
        <div className="sm:grid sm:grid-cols-2">
          <div className="sm:w-full sm:flex">
            <FlowbiteFooter.Copyright
              href="#"
              by="Norman's Blog"
              year={new Date().getFullYear()}
            />
          </div>
          <div className="sm:w-full sm:flex sm:justify-end">
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
              <FlowbiteFooter.Icon href="#" icon={BsFacebook} />
              <FlowbiteFooter.Icon href="#" icon={BsInstagram} />
              <FlowbiteFooter.Icon href="#" icon={BsTwitter} />
              <FlowbiteFooter.Icon href="#" icon={BsGithub} />
              <FlowbiteFooter.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
}
