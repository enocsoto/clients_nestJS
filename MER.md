1. Tabla client (Cliente)
   Descripción: Almacena la información de los clientes.
   Campos comunes:
   client_id (PK): Identificador único del cliente.
   name: Nombre del cliente.
   email: Correo electrónico del cliente.
   phone: Teléfono del cliente.
2. Tabla loan (Prestamos)
   Descripción: Contiene los préstamos realizados a los clientes asi como su respectivo porcentaje de interes.
   Campos comunes:
   client_id (PK): Identificador del cliente.
   installment_status_id (PK): Identificador único del estado de la cuota.
   status_name:

3. Tabla installment_status (Estado de la Cuota)
   Descripción: Contiene los diferentes estados que puede tener una cuota de un préstamo (e.g., pagada, vencida, pendiente).
   Campos comunes:
   installment_status_id (PK): Identificador único del estado de la cuota.
   status_name: Nombre o descripción del estado de la cuota (e.g., "pagada", "vencida").
4. Tabla installment (Cuota)
   Descripción: Contiene la información sobre las cuotas de los préstamos.
   Relaciones:
   installment_id (PK): Identificador único de la cuota.
   loan_id (FK) → Referencia a la tabla loan: Identifica a qué préstamo pertenece la cuota.
   installment_status_id (FK) → Referencia a la tabla installment_status: Indica el estado de la cuota.
   due_date: Fecha de vencimiento de la cuota.
   amount: Monto de la cuota.
5. Tabla payment (Pago)
   Descripción: Registra los pagos realizados por los clientes.
   Relaciones:
   payment_id (PK): Identificador único del pago.
   installment_id (FK) → Referencia a la tabla installment: Identifica a qué cuota corresponde el pago.
   payment_date: Fecha en que se realizó el pago.
   amount: Monto del pago realizado.
   Relaciones entre las tablas:
   Cliente a Préstamo:

Un cliente (client) puede tener uno o varios préstamos. Esta relación se puede definir mediante una tabla de loan que contiene client_id como una clave foránea.
Préstamo a Estado del Préstamo:

Cada préstamo tiene un estado asociado en la tabla loan_status. El loan_status_id será una clave foránea en la tabla loan.
Préstamo a Cuotas:

Un préstamo tiene varias cuotas. La tabla installment contendrá un loan_id que actúa como una clave foránea referenciando a loan.
Cuota a Estado de la Cuota:

Cada cuota tiene un estado que es referenciado por installment_status_id en la tabla installment.
Cuota a Pago:

Una cuota puede tener múltiples pagos asociados. La tabla payment tendrá un installment_id como clave foránea que relaciona el pago con la cuota correspondiente.
Resumen:
client → loan (FK: client_id)
loan → loan_status (FK: loan_status_id)
loan → installment (FK: loan_id)
installment → installment_status (FK: installment_status_id)
installment → payment (FK: installment_id)
