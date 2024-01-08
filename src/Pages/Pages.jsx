import PageBody from "../component/PageBody";
import PageFooter from "../component/PageFooter";
import PageHeader from "../component/PageHeader";

export default function Pages(){

    return(
        <div className="container mx-auto px-1  h-screen max-tablet:w-full">
            <PageHeader></PageHeader>
            <PageBody></PageBody>
            <PageFooter></PageFooter>
        </div>
    );
}
