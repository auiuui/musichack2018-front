import styles from './Header.css';

@CSSModules(styles)
export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="header">
        𝓼𝓸𝓷𝓰𝓻𝓪𝓶
      </div>
    );
  }
}
