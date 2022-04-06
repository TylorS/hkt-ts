import { Alt, Alt1, Alt10, Alt2, Alt3, Alt4, Alt5, Alt6, Alt7, Alt8, Alt9 } from './Alt'
import { HKT, HKT10, HKT2, HKT3, HKT4, HKT5, HKT6, HKT7, HKT8, HKT9 } from './HKT'
import { Zero, Zero1, Zero10, Zero2, Zero3, Zero4, Zero5, Zero6, Zero7, Zero8, Zero9 } from './Zero'

export interface Alternative<T extends HKT> extends Alt<T>, Zero<T> {}

export interface Alternative1<T extends HKT> extends Alt1<T>, Zero1<T> {}

export interface Alternative2<T extends HKT2> extends Alt2<T>, Zero2<T> {}

export interface Alternative3<T extends HKT3> extends Alt3<T>, Zero3<T> {}

export interface Alternative4<T extends HKT4> extends Alt4<T>, Zero4<T> {}

export interface Alternative5<T extends HKT5> extends Alt5<T>, Zero5<T> {}

export interface Alternative6<T extends HKT6> extends Alt6<T>, Zero6<T> {}

export interface Alternative7<T extends HKT7> extends Alt7<T>, Zero7<T> {}

export interface Alternative8<T extends HKT8> extends Alt8<T>, Zero8<T> {}

export interface Alternative9<T extends HKT9> extends Alt9<T>, Zero9<T> {}

export interface Alternative10<T extends HKT10> extends Alt10<T>, Zero10<T> {}
