export const state = () => ({
    isShowQuiz1:false,
    isShowQuiz2:false,
    isShowResult:false,
})

export const mutations = {
    setShowQuiz1(state, val) {
        state.isShowQuiz1 = val;
    },
    setShowQuiz2(state, val) {
        state.isShowQuiz2 = val;
    },
    seShowResult(state, val) {
        state.isShowResult = val;
    },
}