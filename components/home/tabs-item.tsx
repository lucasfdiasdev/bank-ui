import { cn } from "@/lib/utils";
import { ChevronRight, CircleDollarSign } from "lucide-react";

const TabsItem = () => {
  const routesTabsItem = [
    {
      label: "Janeiro",
      sendDate: [
        {
          name: "Terça, 9 Jan., 2024",
          balanceDay: "10,81",
          transferDay: [
            {
              method: "Pix enviado",
              value: "-R$ 200,00",
              icon: CircleDollarSign,
              for: "Yaanke Burgue",
              hours: "12:00",
            },
            {
              method: "Pix recebido",
              value: "R$ 399,00",
              icon: CircleDollarSign,
              color: "text-green-500",
              for: "Yaanke Burgue",
              hours: "12:00",
            },
          ],
        },
        {
          name: "Sábado, 6 Jan., 2024",
          balanceDay: "10,81",
          icon: CircleDollarSign,
          transferDay: [
            {
              method: "Pix recebido",
              value: "R$ 200,00",
              color: "text-green-500",
              icon: CircleDollarSign,
              for: "Lucas Eduardo Dias Fernandes Silva",
              hours: "12:00",
            },
          ],
        },
      ],
    },
    {
      label: "Fevereiro",
      sendDate: [
        {
          name: "Segunda, 8 Jan., 2024",
          balanceDay: "8,92",
          icon: CircleDollarSign,
          transferDay: [
            {
              method: "Pix recebido",
              value: "200,00",
              color: "text-green-500",
              icon: CircleDollarSign,
              for: "Yaanke Burgue",
              hours: "12:00",
            },
          ],
        },
      ],
    },
    {
      label: "Março",
    },
    {
      label: "Abril",
    },
    {
      label: "Maio",
      sendDate: [
        {
          name: "Segunda, 25 Mai., 2024",
          balanceDay: "8,92",
          icon: CircleDollarSign,
          transferDay: [
            {
              method: "Pix recebido",
              value: "R$ 200,00",
              color: "text-green-500",
              icon: CircleDollarSign,
              for: "Yaanke Burgue",
              hours: "12:00",
            },
          ],
        },
      ],
    },
    {
      label: "Junho",
    },
    {
      label: "Julho",
    },
    {
      label: "Agosto",
    },
    {
      label: "Setembro",
    },
    {
      label: "Outubro",
    },
    {
      label: "Novembro",
    },
    {
      label: "Dezembro",
    },
  ];

  return (
    <div className="overflow-y-auto max-h-[calc(100vh-280px)] px-4 -mx-4">
      {routesTabsItem
        .filter((route) => route.sendDate && route.sendDate.length > 0)
        .map((route) => (
          <div className="space-y-4" key={route.label}>
            <h4 className="text-lg font-semibold">{route.label}</h4>
            {route.sendDate?.map((date) => (
              <div key={date.name}>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="text-xs text-muted-foreground">
                    {date.name}
                  </span>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-muted-foreground">Saldo do dia:</span>
                    <span className="font-semibold">R$ {date.balanceDay}</span>
                  </div>
                </div>

                {date.transferDay?.map((transfer) => (
                  <div
                    key={transfer.value}
                    className="border-b border-dashed p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <transfer.icon
                          size={42}
                          className="pr-2 border-r border-dashed"
                        />

                        <div className="flex flex-col pl-2 text-sm">
                          <span className="font-semibold">
                            {transfer.method}
                          </span>
                          <span
                            className={cn(
                              "font-semibold text-xs",
                              transfer.color
                            )}
                          >
                            {transfer.value}
                          </span>
                          <span className="text-muted-foreground font-light">
                            {transfer.for}
                          </span>
                        </div>
                      </div>
                      <div className="shadow-sm bg-gray-100 rounded-md p-1">
                        <ChevronRight size={20} className="text-orange-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default TabsItem;
