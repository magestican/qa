export const homePageInitialState = {
    loadingHomePageData: false,
    homePageData: {}
}
export const faqPageInitialState = {
    faqPageData: {},
    loadingFaqPageData: false
}

export const initialState = {
    faqPageReducer: faqPageInitialState,
    homePageReducer: homePageInitialState
}