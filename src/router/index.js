import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import User from "../views/UserPage.vue";
import passengermanagement from "../views/Passengermanagement.vue";
import secondarycard from "../views/SecondarycardPage.vue";

import about from "../views/Aboutpage.vue";
import addpassnegers from "../views/Addpassengers.vue";
import useragreement from "../views/UseagreementPage.vue";
import TicketImformation from "../views/TicketpurchaseinformationPage.vue";
import OrderTicket from "@/views/OrderPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/user",
      name: "user",
      component: User,
    },
    {
      path: "/passengermanagement",
      name: "passengermanagement",
      component: passengermanagement,
      
    },
    {
      path: "/addpassnegers",
      name: "addpassnegers",
      component: addpassnegers,
    },
    {
      path: "/secondarycard",
      name: "secondarycard",
      component: secondarycard,
    },
    {
      path: "/about",
      name: "about",
      component: about,
    },
    {
      path: "/useragreement",
      name: "useragreement",
      component: useragreement,
    },
    {
      path: "/TicketImformation",
      name: "TicketImformation",
      component: TicketImformation,
    },

    {
      path: "/orderTicket",
      name: "orderTicket",
      component: OrderTicket,
    },
  ],
});

export default router;
