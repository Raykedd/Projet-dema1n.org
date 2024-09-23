import { Badge } from 'primereact/badge';
import { ls, ss } from '../utils/store';

const path = 'src/services/MenuDashboardServices.jsx';

export const MenuDashboard = {
    getNavSettings(setChildW) {
        try {
            const result = [
                {
                    label: 'Accueil',
                    icon: 'pi pi-home',
                    command: () => {
                        setChildW(null);
                    }
                },
                {
                    label: 'Invité',
                    icon: 'pi pi-id-card',
                    items: [
                        {
                            label: 'Mon compte',
                            icon: 'pi pi-fw pi-align-left',
                            command: () => {
                                setChildW("userProfil");
                            }
                        },
                        {
                            label: 'Paramètres d\'applications',
                            icon: 'pi pi-fw pi-cog',
                            command: () => {
                                setChildW("appparams");
                            }
                        },
                        {
                            label: 'Thème',
                            icon: 'pi pi-bolt',
                            command: () => {
                                ls.setFormated('theme', !ls.getFormated('theme'));
                                window.location.reload();
                            }
                        },
                    ]
                },
            ]
            return result;
        }
        catch(error){
            console.error(error);
        }
    },

    getAppList(setChildW){
        try {
            const apps = [

                {
                    appName: 'actuality',
                    label: 'En ce moment',
                    icon:'pi pi-clock',
                    command:()=>{
                        setChildW("actuality");
                    }
                },

                {
                    appName: 'best',
                    label: 'Les mieux notés',
                    icon:'pi pi-eye',
                    command:()=>{ 
                        setChildW("best");
                    }
                },

                {
                    appName: 'type',
                    label: 'Par genre',
                    icon:'pi pi-fw pi-mobile',
                    command:()=>{ 
                        setChildW("type");
                    }
                },

                {
                    appName: 'popularity',
                    label: 'Les plus populaires',
                    icon:'pi pi-fw pi-chart-line',
                    command:()=>{ 
                        setChildW("popularity");
                    }
                },

                {
                    appName: 'incoming',
                    label: 'En développement',
                    icon:'pi pi-fw pi-code',
                    command:()=>{ 
                        setChildW("incoming");
                    }
                },

            ];
    
            var userPanels = [
                {
                    items: apps
                },
            ]
    
            return userPanels;
        }
        catch(error){
            console.error(error);
        }

    },
};

