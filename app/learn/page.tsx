import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LearnPage = () => {
  return (
    <div className="container">
      <div>
        <p className="">Style 101</p>
        {/* Card Container */}
        <div className="flex flex-wrap gap-4">
          <div>
            <Card className="learn-card">
              <CardHeader>
                <CardTitle>Color Theory 101</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>Lots of content goes here</CardContent>
              <CardFooter></CardFooter>
            </Card>{" "}
          </div>
          <div>
            <Card className="learn-card">
              <CardHeader>
                <CardTitle>Class 102</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>Lots of content goes here</CardContent>
              <CardFooter></CardFooter>
            </Card>{" "}
          </div>
          <div>
            <Card className="learn-card">
              <CardHeader>
                <CardTitle>Class 102</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>Lots of content goes here</CardContent>
              <CardFooter></CardFooter>
            </Card>{" "}
          </div>
          <div>
            <Card className="learn-card">
              <CardHeader>
                <CardTitle>Class 102</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>Lots of content goes here</CardContent>
              <CardFooter></CardFooter>
            </Card>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnPage;
