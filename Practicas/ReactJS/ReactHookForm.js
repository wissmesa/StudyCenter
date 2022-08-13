import NumberFormat from 'react-number-format';
import MenuItem from '@material-ui/core/MenuItem'
import { useForm, Controller } from "react-hook-form"
import Button from "components/material-dashboard-pro-react/components/CustomButtons/Button.js";
import { TextField,Icon} from '@material-ui/core'
import TableMaterial from '../../../components/Core/TableMaterial/TableMaterial'

export default function PolicyDirectDebit() {
    // Este estado se usa para ocultar un controller en particular 
    const [showNewAccount,setShowNewAccount] = useState(false)
    // Estos metodos son los encargados de capturar los datos al momento de presionar el boton 
    const { handleSubmit, ...objForm } = useForm()
    const onSubmit = () => {
        console.log(objForm)
    }

    return (
        <>
        {/* Se debe realizar Wrapper de todos los controller con la etiqueta form y asignandole el siguiente valor por prop */}
            <form onSubmit={handleSubmit(onSubmit)}>


                <div style={{ display: "grid", gridTemplateColumns: "0.8fr 0.6fr 0.6fr", gap: "30px", alignItems: "center" }}>


                    <div >
                        <Controller
                            disabled
                            as={TextField}
                            name="Tipo Moneda"
                            rules={{ required: true }}
                            control={objForm.control}
                            defaultValue="NACIONAL"
                            label="Tipo Moneda"
                            style={{ width: "100%" }}
                            helperText={objForm.errors.currencyType && "Debe indicar el tipo de atencion"}
                        >
                                {/* <MenuItem key={'NAC'} value={'NAC'}> */}
                                    NACIONAL
                                {/* </MenuItem> */}
                        
                        </Controller>
                    </div>
                    <div>
                        <Controller

                            select
                            as={TextField}
                            name="Tipo Cuenta"
                            rules={{ required: true }}
                            control={objForm.control}
                            label="Tipo de Cuenta"
                            defaultValue=""
                            style={{ width: "100%" }}
                            helperText={objForm.errors.currencyType && "Debe indicar el tipo de atencion"}
                        >
                            {[{ value: 'AHO', label: 'AHORRO' }, { value: 'COR', label: 'CORRIENTE' }].map((opc, i) => (
                                <MenuItem key={i} value={opc.value} onClick={(opc) => {
                                    objForm.setValue('Banco','')
                                    objForm.setValue('Cuenta','')
                                    setShowNewAccount(false)
                                }}>
                                    {opc.label}
                                </MenuItem>
                            ))}
                        </Controller>
                    </div>
                    <div>
                        <Controller

                            select
                            as={TextField}
                            name="Banco"
                            rules={{ required: true }}
                            control={objForm.control}
                            label="Banco"
                            defaultValue=""
                            style={{ width: "100%" }}
                            helperText={objForm.errors.currencyType && "Debe indicar el tipo de atencion"}
                        >
                            {[{ value: 'BNC', label: 'BANCO NACIONAL DE CREDITO' }, { value: 'BAN', label: 'BANESCO' }].map((opc, i) => (
                                <MenuItem key={i} value={opc.value} onClick={(opc) => {
                                    objForm.setValue('Cuenta','')
                                    setShowNewAccount(false)
                                }}>
                                    {opc.label}
                                </MenuItem>
                            ))}
                        </Controller>
                    </div>
                    <div>
                        <Controller

                            select
                            as={TextField}
                            name="Cuenta"
                            rules={{ required: true }}
                            control={objForm.control}
                            defaultValue=""
                            label="Cuenta"
                            style={{ width: "100%" }}
                            helperText={objForm.errors.currencyType && "Debe indicar el tipo de atencion"}
                        >
                            {[{ value: 'AHO', label: '012020101202010120210' }].map((opc, i) => (
                                <MenuItem key={i} value={opc.value} onClick={() => setShowNewAccount(false) }>
                                    {opc.label}
                                </MenuItem>
                            ))}
                              <MenuItem key={'CUENTA NUEVA'} value={'CUENTA NUEVA'} onClick={() => setShowNewAccount(true) }>
                                CUENTA NUEVA
                                </MenuItem>
                        </Controller>
                    </div>
                    {/* Para ocultar y desocultar un controlador, seteamos por defecto en falso, es decir como si estuviera oculto siempre
                    y al momento de quererlo mostrar llamamos al estado que lo setee en true */}
                    {showNewAccount && (
                        <div>
                        <Controller
                                    control={objForm.control}
                                    name="cardNumber"
                                    as={
                                        <NumberFormat
                                            label="Nueva Cuenta"
                                            mask="_"
                                            allowEmptyFormatting
                                            customInput={TextField}
                                            format={`(${objForm.getValues().bank})-####-##-##########`}
                                            style={{ width: '100%' }}
                                        />
                                    }
                                // rules={{ required: true }}
                                // helperText={(objForm.errors.cardNumber?.replaceAll("-","").replaceAll("_","")?.length < 20) && "El número de cuenta debe tener 20 dígitos"}
                                />
                    </div>
                    )}
                    <div >

                        <Button className='button-panel-information-update-information' color="primary" type="submit"> <Icon>save</Icon> Actualizar info</Button>
                    </div>

                </div>
            </form>

            <TableMaterial
                        options={{
                            pageSize: 5,
                            cellStyle: { textAlign: 'right' },
                            sorting: false,
                            actionsColumnIndex: -1,
                            search: false,
                            toolbar: false,
                            paging: false,
                        }}
                        localization={{
                            header: {
                                actions: ''
                            },
                            body: {
                                emptyDataSourceMessage: 'Sin resultados para mostrar',
                            }
                        }}
                        columns={[
                            {
                                title: 'Banco',
                                field: 'Banco',
                                headerStyle: { textAlign: 'right', fontWeight: 700 },
                                cellStyle: { width: '20%', textAlign: 'right' },
                                // render: rowData => formatAmount(rowData.premium_collected_amount)
                            },
                            {
                                title: 'Tipo Cuenta',
                                field: 'Tipo Cuenta',
                                headerStyle: { textAlign: 'right', fontWeight: 700 },
                                // render: rowData => `${rowData.percentage}%`
                            },
                            {
                                title: 'Numero Cuenta',
                                field: 'Numero Cuenta',
                                headerStyle: { textAlign: 'right', fontWeight: 700 },
                                // render: rowData => `${rowData.percentage}%`
                            },
                            {
                                title: 'Acciones',
                                field: 'Acciones',
                                headerStyle: { textAlign: 'right', fontWeight: 700 }
                            },
                           
                        ]}
                    // data={billfoldData}
                    // actions={[rowData => ({
                    //     icon: 'event',
                    //     tooltip: 'Ver detalle',
                    //     iconProps: {
                    //         className: classes.colorIcon,
                    //         style: {
                    //             fontSize: 24
                    //         }
                    //     },
                    //     onClick: (event, rowData) => handleDetailTable(rowData.area)
                    // })
                    // ]}
                    />


        </>
    )
}