import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

// const link = React.createElement(
//   'a',
//   {
//     href: 'https://reactjs.org/',
//     target: '_blank',
//     rel: 'noreferrer noopener',
//   },
//   'Ссылка на reactjs.org',
// );

// const image = React.createElement('img', {
//   src:
//     'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
//   alt: 'Tacos With Lime',
//   width: 640,
// });

// const title = React.createElement('h2', null, 'Tacos With Lime');
// const price = React.createElement('p', null, 'Price: 10.99$');
// const button = React.createElement('button', { type: 'button' }, 'Add to cart');

// const product = React.createElement(
//   'section',
//   null,
//   image,
//   title,
//   price,
//   button,
//   link,
// );

// /*
//  * Для передачи детей можно использовать свойство children параметра props.
//  * Обратите внимание на то, что свойство children это массив.
//  */
// const productWithChildrenInProps = React.createElement('div', {
//   children: [image, title, price, button],
// });

// ReactDOM.render(product, document.getElementById('root'));

// const imageUrl =
//   'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640';
// const price = 10.99;

// const product = (
//   <>
//     <img src={imageUrl} alt="Tacos With Lime" width="640" />
//     <h2>Tacos With Lime</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </>
// );

// ReactDOM.render(product, document.getElementById('root'));

// const Product = props => (
//   <>
//     <img
//       src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//       alt="Tacos With Lime"
//       width="640"
//     />
//     <h2>Tacos With Lime</h2>
//     <p>Price: 10.99$</p>
//     <button type="button">Add to cart</button>
//   </>
// );

// Вызов компонента записывается как JSX-тег

// Это аналогично
// ReactDOM.render(React.createElement(Product), document.getElementById('root'));

// const Product = props => (
//   <div>
//     <img src={props.imgUrl} alt={props.alt} width="640" />
//     <h2>{props.name}</h2>
//     <p>Price: {props.price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// const Profile = ({ name, email }) => (
//   <div>
//     <p>Name: {name}</p>
//     <p>Email: {email}</p>
//   </div>
// );

// const Panel = ({ title, children }) => (
//   <section>
//     <h2>{title}</h2>
//     {children}
//   </section>
// );

// const App = () => (
//   <>
//     <Panel title="User profile">
//       <Profile name="Mango" email="mango@mail.com" />
//     </Panel>
//   </>
// );

// ReactDOM.render(<App />, document.getElementById('root'));

// const Product = ({ imgUrl, alt, name, price }) => (
//   <div>
//     <img src={imgUrl} alt={alt} width="640" />
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// Product.defaultProps = {
//   alt: 'product image',
// };

// /*
//  * Определение defaultProps гарантирует, что `props.alt` будет иметь значение,
//  * даже если оно не было указано при вызове компонента в родителе.
//  */

// Product.propTypes = {
//   imgUrl: PropTypes.string.isRequired,
//   alt: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };

// ReactDOM.render(
//   <Product
//     imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//     name="Tacos With Lime"
//     price={10.99}
//   />,
//   document.getElementById('root'),
// );
const technologies = [
  { id: 'id-1', name: 'JS' },
  { id: 'id-2', name: 'React' },
  { id: 'id-3', name: 'React Router' },
  { id: 'id-4', name: 'Redux' },
];

const TechList = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);

ReactDOM.render(
  <TechList items={technologies} />,
  document.getElementById('root'),
);
