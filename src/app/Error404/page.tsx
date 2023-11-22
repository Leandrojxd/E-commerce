import CustomImage from "@/components/atoms/CustomImage";
import styles from 'public/home.module.css';
import TopBarHeader from "@/components/organism/TopBarHeader";
import Error from "@/components/templates/Error";


export default function error() {
  return (
    <div>
        <TopBarHeader />
        <Error />
    </div>
  )
}
