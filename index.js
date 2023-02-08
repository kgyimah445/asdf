(function (window, _) {
  window.asdf = window.asdf || {
    numz: {},
    phyz: {
      /**
       * 
       * @param {object} pointA - The first point
       * @param {object} pointB - The second point
       * @param {number} pointB.x - Point B's X value
       * @param {number} pointB.y - Point B's Y value
       * @param {number} pointA.x - Point A's X value
       * @param {number} pointA.y - Point A's Y value 
       * @returns {number} - Returns the distance between point A and point B
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
