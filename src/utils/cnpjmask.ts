export function CNPJMask(v: string): string {
    v = v.replace(/\D/g, '') 
    v = v.replace(/^(\d{2})(\d)/, '$1.$2') 
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3') 
    v = v.replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3/$4') 
    v = v.replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, '$1.$2.$3/$4-$5') 
    return v.substring(0, 18) 
}
