export const Section = ({text, children}) => {
    return (
        <section>
          <Title text={text} />
          <ul>
            {children}
          </ul>      
        </section>
      )
};