import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  interface MyComponentProps {

    day: string;
  }
  
const DayCard: React.FC<MyComponentProps> = ({ day }) => {
    return (
    <>
    <Card>
    <CardHeader>
      <CardTitle>{day}</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
    </>
  
  );
}

export default DayCard;