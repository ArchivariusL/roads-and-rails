import tinycolor from 'tinycolor2';

export default {
  /**
   * This is our caching backend
   */
  // This used to work, but seems like GitHub no longer allows large website hosting:
  //areaServer: 'https://anvaka.github.io/index-large-cities/data',
  //areaServer: 'http://localhost:8085', // This is un-commented when I develop cache locally
  // So, using S3
  areaServer: 'https://city-roads.s3-us-west-2.amazonaws.com/nov-02-2020',

  getRoadColor() {
    return tinycolor('rgba(120, 120, 120, 0.5)');
  },
  getRailColor() {
    return tinycolor('rgba(50, 120, 0, 0.5)');
  },
  getNarrowColor() {
    return tinycolor('rgba(80, 230, 60, 0.3)');
  },
  getSubwayColor() {
    return tinycolor('rgba(20, 0, 160, 0.5)');
  },
  getTramColor() {
    return tinycolor('rgba(230, 0, 160, 0.5)');
  },
  getLabelColor() {
    return tinycolor('#161616');
  },

  getBackgroundColor() {
    return tinycolor('#F7F2E8');
  }
}