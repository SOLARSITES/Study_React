export const totalPriceItems = (order) => {
  const countTopping = order.topping ? order.topping.filter((item) => item.checked).length : 0;
  const priceTopping = order.price * 0.1 * countTopping;

  return Math.abs((order.price + priceTopping) * order.count);
};

export const formatCurrency = (value) => value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });

export const projection = (rules) => {
  const keys = Object.keys(rules);

  return (obj) =>
    keys.reduce((newObj, key) => {
      newObj[key] = rules[key].reduce((val, fn, i) => (i ? fn(val) : obj[fn]), null);

      return newObj;
    }, {});
};

export const disableScroll = () => {
  const headerWrapper = document.getElementById('header-wrapper');
  const scrollWidth = window.innerWidth - document.body.offsetWidth;

  document.body.dataset.scrollY = window.scrollY;

  document.body.style.cssText = `
        position:fixed;
        top: -${window.scrollY}px;
        left:0;
        width: 100%;
        overflow:hidden;
        height:100vh;
        padding-right: ${scrollWidth}px;
    `;

  headerWrapper.style.cssText = `padding-right: ${scrollWidth}px;`;
};

export const enableScroll = () => {
  const headerWrapper = document.getElementById('header-wrapper');

  document.body.style.cssText = '';
  headerWrapper.style.cssText = '';

  window.scroll({
    top: document.body.dataset.scrollY,
  });
};
