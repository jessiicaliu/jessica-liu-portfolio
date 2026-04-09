import React from "react";

interface ProfileDescriptionProps {
  children?: React.ReactNode;
}

const defaultText = (
  <>
    I'm a 2nd-year <span className="text-primary font-semibold" style={{ color: 'hsl(var(--primary))' }}>Management Engineering</span> student at the <span className="text-primary font-semibold" style={{ color: 'hsl(var(--primary))' }}>University of Waterloo</span>,
    minoring in computing & AI. I like taking ideas from start to finish and working on
    thoughtful solutions that keep people in mind.
    <br /><br />
    When I'm not at my desk, you'll find me at the gym, catching a concert, or grabbing
    sushi with friends. I also enjoy volunteering and staying connected to the engineering
    community.
    <br /><br />
    Open to <span className="font-semibold text-foreground/70">SWE, data, and product</span> opportunities for <span className="font-semibold text-foreground/70">Fall 2026</span> & <span className="font-semibold text-foreground/70">Summer 2027</span>.
  </>
);

const ProfileDescription: React.FC<ProfileDescriptionProps> = ({ children }) => (
  <p className="font-sans text-[15px] md:text-[15px] text-foreground/55 leading-relaxed max-w-xl">
    {children || defaultText}
  </p>
);

export default ProfileDescription;
