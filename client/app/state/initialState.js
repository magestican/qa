export const homePageInitialState = {
    loadingHomePageData: false,
    homePageData: {
        homepage: {}
    }
}
export const faqPageInitialState = {
    faqPageData: {
        faqs: []
    },
    loadingFaqPageData: false
}

export const initialState = {
    faqPageReducer: faqPageInitialState,
    homePageReducer: homePageInitialState
}