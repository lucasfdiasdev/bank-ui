import TabsItem from "@/components/home/tabs-item";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const SectionTabs = () => {
  return (
    <Tabs defaultValue="todos" className="flex flex-col w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="todos">Todos</TabsTrigger>
        <TabsTrigger value="entradas">Entradas</TabsTrigger>
        <TabsTrigger value="saidas">Saidas</TabsTrigger>
      </TabsList>
      <TabsContent value="todos" className="items-start">
        <TabsItem />
      </TabsContent>
      <TabsContent value="entradas">
        <TabsItem />
      </TabsContent>
      <TabsContent value="saidas">
        <TabsItem />
      </TabsContent>
    </Tabs>
  );
};

export default SectionTabs;
