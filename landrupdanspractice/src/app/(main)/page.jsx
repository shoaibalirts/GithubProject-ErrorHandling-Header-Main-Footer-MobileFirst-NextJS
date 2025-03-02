import { getAllActivities } from "@/lib/server-fetch";
import NotFoundPage from "../not-found";
import ActivityCard from "./activity-card";
export default async function HomePage(){  
    const activities = await getAllActivities();
    
    return (
        <>
            <h1>Activities</h1>
            {activities.map((activity)=><ActivityCard key={activity.id} activity={activity} />)}
        </>
    );
    
}