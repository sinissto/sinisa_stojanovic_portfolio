import { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
  return (
    <section className={"flex-1 flex flex-col justify-center py-12 lg:py-0"}>
      {children}
    </section>
  );
};

export default Section;
