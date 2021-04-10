import React from 'react';
import styled from 'styled-components';

const Content = ({ className }) => {
  return (
    <section className={className}>
      <h3>section title</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum
        necessitatibus ipsam pariatur eligendi veniam perspiciatis, aut tempora
        quia, nostrum eos at dolorum ab rerum a amet exercitationem recusandae
        cumque.
      </p>
    </section>
  );
};

export default styled(Content)`
  text-transform: capitalize;
  padding: 2rem;
  ${p => `background: ${p.theme.secondaryColor}`};
  ${p => `color: ${p.theme.primaryColor}`};
`;
