import { getAllActivities } from "@/lib/server-fetch";
import ActivityCard from "./activity-card";
export default async function HomePage(){

    const activities = await getAllActivities();
    // console.log(activities);
    return (
        <>
            <h1>Activities</h1>
            {activities.map((activity)=><ActivityCard key={activity.id} activity={activity} />)}
        </>
    );
    
}