function yb(a,b){this.start=u.create(a);this.end=u.create(b)}yb.prototype.toString=function(){return this.isValid()?this.start.full()+".."+this.end.full():"Invalid DateRange"};
H(yb,j,m,{isValid:function(){return this.start<this.end},duration:function(){return this.isValid()?this.end.getTime()-this.start.getTime():NaN},contains:function(a){var b=this;return(a.start&&a.end?[a.start,a.end]:[a]).every(function(c){return c>=b.start&&c<=b.end})},every:function(a,b){var c=this.start.clone(),d=[],e=0,g;if(F(a)){c.advance(nb(a,0),j);g=nb(a)}else g={milliseconds:a};for(;c<=this.end;){d.push(c);b&&b(c,e);c=c.clone().advance(g,j);e++}return d},union:function(a){return new yb(this.start<
a.start?this.start:a.start,this.end>a.end?this.end:a.end)},intersect:function(a){return new yb(this.start>a.start?this.start:a.start,this.end<a.end?this.end:a.end)}});K(yb,j,m,"Millisecond,Second,Minute,Hour,Day,Week,Month,Year",function(a,b){a["each"+b]=function(c){return this.every(b,c)}});H(u,m,m,{range:function(a,b){return new yb(a,b)}});