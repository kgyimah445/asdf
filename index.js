(function (window, _) {
  window.asdf = window.asdf || {
    numz: {},
    phyz: {
      /**
       *
       * @param {object} obj1 - An object
       * @param {object} obj2 - An object
       */
      getDistance(pointA, pointB) {
        const distanceX = pointB.x - pointA.x,
          distanceY = pointB.y - pointA.y,
          distance = Math.sqrt(distanceX * distanceX - distanceY * distanceY);
        return distance;
      },
    },
  };
})(window, window._);

asdf.phyz.calcDistanc;
