import PageBody from "../component/PageBody";
import PageFooter from "../component/PageFooter";
import PageHeader from "../component/PageHeader";

export default function Pages(){

    return(
        <div className="container mx-auto px-20  h-screen">
            <PageHeader></PageHeader>
            <PageBody></PageBody>
            <PageFooter></PageFooter>
        </div>
    );
}
