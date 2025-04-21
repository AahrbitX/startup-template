import Button from "@/components/atoms/Button";
import { IconCircle } from "@tabler/icons-react";
import React from "react";
import { Dialog } from "@/components/molecules/dialog";
import { EmailForm } from "@/components/molecules/email-form";

function ContactSection() {
  return (
    <div className="h-100 md:h-150 px-3 my-18">
      <div className="max-w-7xl w-full h-full bg-primary mx-auto rounded-b-[80px] flex items-center justify-evenly flex-col">
        <div className="flex w-full px-10 items-center gap-8">
          <div className="w-full h-[1px] bg-neutral-400/70" />
          <IconCircle className="text-neutral-400/70 size-8" />
          <IconCircle className="text-neutral-400/70 size-8" />
          <IconCircle className="text-neutral-400/70 size-8" />
          <div className="w-full h-[1px] bg-neutral-400/70" />
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-heading font-bold text-center text-neutral-800">
          Let&apos;s Discuss
          <br /> Your Ideas
        </h2>
        <div className="flex items-center justify-center gap-12">
          <Dialog
            trigger={
              <Button className="scale-110 md:scale-120">Talks Now</Button>
            }
            animationStyle="from-bottom"
          >
            <EmailForm />
          </Dialog>
          <Button className="scale-110 md:scale-120" variant="outline">
            Follow Us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
