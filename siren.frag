#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec2 spin(vec2 pos,float t,float fac){
    return pos+vec2(sin(t),cos(t))*fac;
}

void main(){
    vec2 st=gl_FragCoord.xy/min(u_resolution.x,u_resolution.y);
    float t=u_time*5.;
    
    float pct=distance(vec2(.5),st);
    
    pct=distance(st,spin(vec2(.5),t,.2))-distance(st,spin(vec2(.5),t,-.1));
    
    vec3 color=vec3(pct*2.);
    gl_FragColor=vec4(color,1.);
}
