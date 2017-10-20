
function navigateToPage(page){
    wx.navigateTo({
      url: '../'+page+'/'+page
    })
}

module.exports = {
    navigateToPage:navigateToPage
}