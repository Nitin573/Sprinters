import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';



 const datas=[{
    title:"CONTESTS",
    isMoney:false,
    link:"/upload-contest-details",
    linktext:"See all contest",
    icon:<PersonOutlineTwoToneIcon 
    fontSize='large'
    sx={{color:" #590fbf" ,backgroundColor:"#a289c4",borderRadius:"7px"}}
    
    />,
},


{
    title:"TESTIMONIALS",
    isMoney:false,
    link:"/upload-client-testimonials",
    linktext:"See all testimonials",
    icon:<ShoppingBagTwoToneIcon
    fontSize='large'
     sx={{color:" #853a7c" ,backgroundColor:"#cca1c7",borderRadius:"7px"}}
    
    />
},

{
    title:"NOTIFICATION",
            isMoney:false,
            link:"/update-notification",
            linktext:"See all notification",
            icon:<PersonOutlineTwoToneIcon 
            fontSize='large' sx={{color:" green" ,backgroundColor:"#c2f542",borderRadius:"7px"}}
            />,
},


{
    title:"EARNINGS",
    isMoney:true,
    
    linktext:"View net earnings",
    icon:<MonetizationOnTwoToneIcon  fontSize='large' sx={{color:" crimson" ,backgroundColor:"rgba(255,0,0,0.2)",borderRadius:"7px"}}/>,
}

];
export default datas;
