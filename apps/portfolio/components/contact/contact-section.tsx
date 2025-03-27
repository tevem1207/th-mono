import { Button } from "@repo/ui";
import React from "react";

import personalInfo from "@/data/personal";

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
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="Your email"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="Subject"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="Your message"
            />
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};
