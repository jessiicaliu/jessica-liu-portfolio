import React from "react";

interface ProfileDescriptionProps {
  children?: React.ReactNode;
}

const defaultText = (
  <>
    Hello! I'm a 2nd-year Management Engineering student at the University of Waterloo,
    minoring in computing and AI. I like taking ideas from start to finish and working on
    thoughtful solutions that keep people in mind. I'm interested in software engineering,
    data, and product roles.
    <br /><br />
    When I'm not at my desk, you'll find me at the gym, catching a concert, or grabbing
    sushi with friends. I also enjoy volunteering and staying connected to the engineering
    community.
    <br /><br />
    I'm currently open to Fall 2026 and Summer 2027 opportunities. Happy to chat!
  </>
);

const ProfileDescription: React.FC<ProfileDescriptionProps> = ({ children }) => (
  <p className="font-sans text-[15px] md:text-[15px] text-foreground/55 leading-relaxed max-w-xl">
    {children || defaultText}
  </p>
);

export default ProfileDescription;
