
import ncNanoId from "@/utils/ncNanoId";

export interface TicketProps {
    id: string;
    name: string;
    desc: string;
    price: string;
    totalSeats:number;
    availableSeats:number;

  }
 export const TICKET_DEMO: TicketProps[] = [

    {
      id: ncNanoId(),
     
      name: "Early Bird",
      desc:"Engage with The Half Brick – Raw Stories™ in a whole new way. Attend an unforgettable event from The Half Brick stage, inspiring conversations with a global community, and more",
        price:"₹100",
        totalSeats:10,availableSeats:2
      
    },
    {
        id: ncNanoId(),
       
        name: "Platinum",
        desc:"Engage with The Half Brick – Raw Stories™ in a whole new way. Attend an unforgettable event from The Half Brick stage, inspiring conversations with a global community, and more",
          price:"₹500",
          totalSeats:10,availableSeats:5
      },
  ];