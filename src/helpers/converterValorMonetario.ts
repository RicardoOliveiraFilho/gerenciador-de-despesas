export const formatarMoeda = (valor: number): string => {
  return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}