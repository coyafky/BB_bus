import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import User from "../views/UserPage.vue";
import passengermanagement from "../views/Passengermanagement.vue";
import secondarycard from "../views/SecondarycardPage.vue";
import about from "../views/Aboutpage.vue";
import addpassnegers from "../views/Addpassengers.vue";
import useragreement from "../views/UseagreementPage.vue";
import TicketInformation from "../views/TicketpurchaseinformationPage.vue";
import OrderTicket from "@/views/OrderPage.vue";
import voucher from "@/views/voucherPage.vue";
import unfinished from "@/views/unfinishedPage.vue";
import already from "@/views/Alreadytraveled.vue";
import Start from "@/views/Start.vue";
import End from "@/views/End.vue";
import QueryPage from "@/views/QueryPage.vue";
import paymentPage from  "@/views/PaymentPage.vue";
import Timeperiodfilter from  "@/views/Timeperiodfilter.vue";
import StartPiontPicker from "@/views/StartPointPicker.vue";
import EndPiontPicker from "@/views/EndPointPicker.vue";
import StartEndPiontPicker from "@/views/SEPointPicker.vue";
import editpassenger from "@/views/editpassengerPage.vue";

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
      path: "/TicketInformation",
      name: "TicketInformation",
      component: TicketInformation,
    },

    {
      path: "/orderTicket",
      name: "orderTicket",
      component: OrderTicket,

      children: [
        {
          path: "unfinished",
          name: "unfinished",
          component: unfinished,
        },

        {
          path: "already",
          name: "already",
          component: already,
        },
      ],
    },
    {
      path: "/voucher",
      name: "voucher",
      component: voucher,
    },
    {
      path: "/Start",
      name: "Start",
      component: Start,
    },
    {
      path: '/End',
      name: 'End',
      component: End
    },
    {
      path: "/QueryPage",
      name: "QueryPage",
      component: QueryPage,
    },
    {
      path: "/paymentPage",
      name: "paymentPage",
      component: paymentPage,
    },
    {
      path: "/Timeperiodfilter",
      name: "Timeperiodfilter",
      component: Timeperiodfilter,
    },
    {
      path: "/StartPiontPicker",
      name: "StartPiontPicker",
      component: StartPiontPicker,
    },
    {
      path: "/EndPiontPicker",
      name:  "EndPiontPicker" ,
      component:  EndPiontPicker  ,
    },
    {
      path :"/StartEndPiontPicker",
      name : "StartEndPiontPicker",
      component : StartEndPiontPicker,
    },
    {
      path: "/editpassenger",
      name: "editpassenger",
      component: editpassenger,
    },
  
  ],

});

export default router;
