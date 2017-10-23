
function navigateToPage(page){
    console.log(page);
    wx.navigateTo({
      url: '../'+page+'/'+page
    })
}

module.exports = {
    navigateToPage:navigateToPage
}