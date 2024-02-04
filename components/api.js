export function fetchData(url) {
    if (url === '/planets') {
      return fetchPlanets();
    } else if (url.startsWith('/planets/')) {
      const match = url.match(/^\/planets\/([\w-]+)\/places(\/)?$/);
      if (!match || !match[1] || !match[1].length) {
        throw Error('预期的 URL，如“/planets/earth/places”。 已收到："' + url + '"。');
      }
      return fetchPlaces(match[1]);
    } else throw Error('预期的 URL，如“/planets”或“/planets/earth/places”。已收到："' + url + '"。');
  }
  
  async function fetchPlanets() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([{
          id: 'earth',
          name: '地球'
        }, {
          id: 'venus',
          name: '金星'
        }, {
          id: 'mars',
          name: '火星'        
        }]);
      }, 1000);
    });
  }
  
  async function fetchPlaces(planetId) {
    if (typeof planetId !== 'string') {
      throw Error(
        'fetchPlaces(planetId) 需要一个字符串参数。' +
        '而是收到：' + planetId + '。'
      );
    }
    return new Promise(resolve => {
      setTimeout(() => {
        if (planetId === 'earth') {
          resolve([{
            id: 'laos',
            name: '老挝'
          }, {
            id: 'spain',
            name: '西班牙'
          }, {
            id: 'vietnam',
            name: '越南'        
          }]);
        } else if (planetId === 'venus') {
          resolve([{
            id: 'aurelia',
            name: '奥雷利亚'
          }, {
            id: 'diana-chasma',
            name: '戴安娜哈斯玛'
          }, {
            id: 'kumsong-vallis',
            name: 'Kŭmsŏng山谷'        
          }]);
        } else if (planetId === 'mars') {
          resolve([{
            id: 'aluminum-city',
            name: '铝城'
          }, {
            id: 'new-new-york',
            name: '纽纽约'
          }, {
            id: 'vishniac',
            name: '毗湿奴'
          }]);
        } else throw Error('未知的行星编号：' + planetId);
      }, 1000);
    });
  }
  