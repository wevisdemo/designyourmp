export const state = () => ({
    isShowQuiz1:false,
    isShowQuiz2:false,
    isShowResultQuiz1:false,
    selectedQuiz:0,
})

export const mutations = {
    setShowQuiz1(state, val) {
        state.isShowQuiz1 = val;
    },
    setShowQuiz2(state, val) {
        state.isShowQuiz2 = val;
    },
    setShowResultQuiz1(state, val) {
        state.isShowResultQuiz1 = val;
    },
    setSelectedQuiz(state, val) {
        state.selectedQuiz = val;
    },
}