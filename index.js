import loading from "./lib/ScreenLoading";

const LoadPlugin = {
    install(Vue,options){
        const loadingSubclass = Vue.extend(loading);
        const Profile = new loadingSubclass().$mount()
        document.body.appendChild(Profile.$el);
        if(options){
            if(options.tips){
                Profile.tips = options.tips;
            }
        }
        Vue.prototype.$ScreenLoading = {
            show(tips,tipPosition) {
                Profile.show = true;
                if (tips) {
                    Profile.tips = tips;
                }
                if (tipPosition) {
                    Profile.tipPosition = tipPosition;
                }
            },
            hide() {
                Profile.show = false;
            }
        };
    }
};
export default LoadPlugin;
