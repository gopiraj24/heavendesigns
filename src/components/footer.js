import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allSocialJson {
        nodes {
          id
          name
          href
          icon {
            publicURL
          }
        }
      }
    }
  `);
  return (
    <footer>
      <div className="container mx-auto">
        <div className="mt-2 mb-10 md:mb-20">
          <hr className="text-neutral-300"></hr>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 md:pr-24">
            <h3 className="pb-4 font-normal font-display md:text-display-lg text-display-sm">
              Kick-start your dream home with us
            </h3>
            <a
              href="/"
              className="italic underline font-display md:text-display-lg text-display-sm text-primary-600">
              Send us a hi
            </a>
          </div>
          <div className="flex flex-col gap-8 lg:col-span-6 xl:pl-80 lg:pl-48">
            <div className="flex flex-col gap-2">
              <p className="font-normal text-display-xs font-display">
                K Raheja Rd, Gujarat.
              </p>
              <p className="font-light text-body-sm text-neutral-900">
               Heaven Designs, Saamarth H6. K Raheja Road, Koba Village,
               Gandhinagar, 382421.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-light text-body-sm text-neutral-900">
                Email us at
              </p>
              <a
                className="font-normal text-display-xs font-display text-primary-600"
                href="mailto:hello@landify.design">
                admin@heaven-designs.com
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-light text-body-sm text-neutral-900">
                If you're hurry, quick call for us
              </p>
              <a
                className="font-normal text-display-xs font-display text-primary-600"
                href="/">
                +91 94087 63648
              </a>
            </div>
          </div>
        </div>
        <div className="my-10 md:my-20">
          <hr className="text-neutral-300"></hr>
        </div>
        <div className="flex flex-col justify-between gap-8 mb-10 lg:flex-row lg:items-center md:mb-20">
          <div className="font-light text-body-md">
            © {new Date().getFullYear()} Heaven designs - Award winning studio. Made with
            love by {"Gopi "}
            {/* <a
              href="https://landify.design/?ref=inteo"
              className="text-primary-600">
              Landify
            </a> */}
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center md:gap-6">
            <div className="flex flex-row items-center opacity-70">
              <p className="pr-4 font-semibold tracking-widest text-body-sm text-neutral-700">
                CONNECT
              </p>
              <hr className="w-16 text-neutral-700"></hr>
            </div>
            <div className="flex flex-row items-center gap-6">
              {data.allSocialJson.nodes.map((node) => (
                <a
                  href={node.href}
                  key={node.name}
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className="w-10 h-10"
                    src={node.icon.publicURL}
                    alt={node.name}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
