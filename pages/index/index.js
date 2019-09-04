// pages/index/index.wxml.js

import stockService from '../../services/stockService.js';

console.log(stockService)

Page({

  /**
   * Page initial data
   */
  data: {
    kTypes: [
      {
        label: '分时',
        value: 'minK'
      }, 
      {
        label: '日K',
        value: 'dailyK'
      },
      {
        label: '周K',
        value: 'weeklyK'
      },
      {
        label: '月K',
        value: 'monthlyK'
      }
    ],
    kIndex: 0,
    sectors: [
      {
        label: '证券',
        value: 'security'
      },
      {
        label: '保险',
        value: 'assurance'
      },
      {
        label: '白酒',
        value: 'alcohol'
      }
    ],
    sectorIndex: 0,
    stockList: []
  },

  // methods 
  onKTypeChange(e) {
    const kIndex = e.detail.value;
    this.setData({
      kIndex
    });
    
    this.stockList = stockService.getStocksBySector(this.data.sectors[this.data.sectorIndex].value);
    console.log(this.stockList)
  },
  onSectorChange(e) {
    const sectorIndex = e.detail.value;
    this.setData({
      sectorIndex
    });
    this.stockList = stockService.getStocksBySector(this.data.sectors[sectorIndex].value);
    console.log(this.stockList);
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})