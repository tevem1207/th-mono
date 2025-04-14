import React from "react";

import personalInfo from "@/data/personal";

import { ContactForm } from "./contact-form";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-24 border-t">
      <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">
        Get In Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="text-muted-foreground flex-col flex gap-6">
          <p>
            {
              "프리랜서 작업이나 흥미로운 프로젝트에 함께할 준비가 되어 있습니다!"
            }
          </p>
          <p>
            {
              "프론트엔드 개발자가 필요하시거나 편하게 이야기 나누고 싶다면 언제든지 연락 주세요. 좋은 인연이 되길 기대합니다! 😊"
            }
          </p>

          <div className="space-y-4">
            {personalInfo.contact.map(({ type, href, ContactIcon }) => {
              const { hostname, pathname } = new URL(href);
              return (
                <div key={type} className="flex items-center">
                  <ContactIcon className="size-5 mr-3 text-primary" />
                  <a
                    href={href}
                    className="hover:text-primary transition-colors"
                  >
                    {hostname + pathname}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};
