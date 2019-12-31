// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

#define M_PI 3.1415926535897932384626433832795

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float circleMask(vec2 st,vec2 pos,float r){
    
    vec2 dist=st-vec2(pos);
    
    // dot(dist, dist) gives us dist.x^2 + dist.y^2,
    // so we compare that to r^2 to avoid a sqrt.
    // Not sure why the *4. is required, though.
    
    r=r*r;
    return 1.-smoothstep(r-(r*.01),
    r+(r*.01),
    dot(dist,dist)*4.);
}

vec2 spin(vec2 pos,float t,float fac){
    return pos+vec2(sin(t),cos(t))*fac;
}

void main(){
    vec2 st=gl_FragCoord.xy/min(u_resolution.x,u_resolution.y);
    float pct=0.;
    
    float t=u_time*5.;
    float t2=u_time*5.+M_PI;
    
    vec3 color=
    (circleMask(st,spin(vec2(.5),t,.2),.2)+
    circleMask(st,spin(vec2(.5),t2,.2),.2))*
    vec3(1.,0.,0.);
    
    gl_FragColor=vec4(color,1.);
}
