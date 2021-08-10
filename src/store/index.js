import { createStore } from 'vuex'

export default createStore({
    actions: {
        async fetchPosts(ctx) { ctx.commit('updatePosts', await (await fetch("home.json")).json()) },
        async fetchSocial(ctx) { ctx.commit('updateSocial', await (await fetch("social.json")).json()) },
        async fetchStaff(ctx) { ctx.commit('updateStaff', await (await fetch("staff.json")).json()) },
        async fetchMaterials(ctx) { ctx.commit('updateMaterials', await (await fetch("materials.json")).json()) },
        async fetchTimetable(ctx) { ctx.commit('updateTimetable', await (await fetch("timetable.json")).json()) },
        async fetchControl(ctx) { ctx.commit('updateControl', await (await fetch("control.json")).json()) },
        async fetchEnter(ctx) { ctx.commit('updateEnter', await (await fetch("enter.json")).json()) },
        async fetchWorship(ctx) { ctx.commit('updateWorship', await (await fetch("worship.json")).json()) },
        async fetchEnterControl(ctx) { ctx.commit('updateEnterControl', await (await fetch("enter_control.json")).json()) },
        async fetchEnterReport(ctx) { ctx.commit('updateEnterReport', await (await fetch("enter_report.json")).json()) }
    },
    mutations: {
        updatePosts(state, data) { state.communities = data },
        updateSocial(state, data) { state.social = data },
        updateStaff(state, data) { state.staff = data },
        updateMaterials(state, data) { state.materials = data },
        updateTimetable(state, data) { state.timetable = data },
        updateControl(state, data) { state.control = data },
        updateEnter(state, data) { state.enter = data },
        updateWorship(state, data) { state.worship = data },
        updateEnterControl(state, data) { state.enter_control = data },
        updateEnterReport(state, data) { state.enter_report = data },
    },
    state: {
        communities: [],
        social: [],
        staff: [],
        materials: [],
        timetable: [],
        control: [],
        enter: [],
        worship: [],
        enter_control: [],
        enter_report: []
    },
    getters: {},
})
