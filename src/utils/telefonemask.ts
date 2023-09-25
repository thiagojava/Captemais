export function telefoneMask(v: string): string {
    v = v.replace(/\D/g, '');

    if (v.length <= 10) {
      v = v.replace(/^(\d{0,2})(\d{0,4})(\d{0,4})/, '($1) $2-$3');
    } else {
      v = v.replace(/^(\d{0,2})(\d{0,5})(\d{0,4})/, '($1) $2-$3');
    }
    
    return v;
}
