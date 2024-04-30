import styles from './Header.module.scss';


export const Stack = ( { as: Component = 'div',  justify, align, direction, max, ...props }) => {

    const styleStack = {
        display: 'flex',
        justifyContent: justify,
        alignItems: align,
        flexDirection: direction,
        maxWidth: max,
      };
      return (
        <Component style={styleStack} {...props}>
          {children}
        </Component>
      );
};


// 1 – justify: string
// 2 – align: string
// 3 - direction: string
// 4 – max: string
// 5 – children: React
// Node
// Компонет для
// позиционирования
// элементов по display: flex